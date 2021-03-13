let db = require("../database/models");
const { Op } = db.Sequelize;

async function getAvailableActorsAndMapToSelectOptions(movie) {
    const movieActorsIds = movie.actors.map((actor) => {
        return actor.id;
    });
    const availableActors = await db.Actors.findAll({
        where: {
            id: {
                [Op.notIn]: movieActorsIds,
            },
        },
    });

    return availableActors.map((actor) => {
        return { id: actor.id, label: `${actor.first_name} ${actor.last_name}` };
    });
}

module.exports = {
    index: (req,res)=>{
        db.Movies.findAll()
            .then(movies => res.render('movies/index',{movies}));
    },
    show: (req, res) => {
       db.Movies.findByPk(req.params.id,{include:['genre','actors']})
           .then(movie => res.render('movies/show',{movie}));
    },
    create: async (req, res) => {
        let genres = await db.Genres.findAll();
        return res.render('movies/create',{ genres })
    },
    store: (req,res) => {
        db.Movies.create(req.body)
        .then(() => res.redirect('/movies'))
        .catch(error=>console.log(error));
    },
    edit: async (req,res)=> {
        let genres = await db.Genres.findAll();
        let movie = await db.Movies.findByPk(req.params.id,{
            include:["genre","actors"]
        });
        let availableActors = await getAvailableActorsAndMapToSelectOptions(movie);
        res.render('movies/edit', { genres, movie, availableActors})
    },
    update: (req,res)=> {
        let _body = req.body
        db.Movies.update(_body,{
            where: {id: req.params.id}
        })
        .then(() => res.redirect(`/movies/${req.params.id}`))
        .catch(error=>console.log(error));
    },
    destroy: (req, res)=> {
        db.Movies.destroy({where: {id: req.params.id}})
            .then(() => res.redirect('/movies'))
            .catch(error=>console.log(error));
    },
    recommended: (req,res)=>{
        db.Movies.findAll({
            where: {
                awards: { [Op.gt]: 4 }
            },
            order: [['awards']]
        })
        .then(movies => res.render('movies/recommended',{movies}));
    },
    news: (req,res)=>{
        db.Movies.findAll({
            order: [
                ['release_date','DESC']
            ],
            limit:5
        })
        .then(movies => res.render('movies/news',{movies}));
    },
    search: (req,res) => {
        let search = req.query.q
        db.Movies.findAll({
            where: {
                title : {[Op.like]:'%'+ search+'%'}
            }
        })
        .then(movies => res.render('movies/search',{movies, search}));
    },
    addActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.body.actor_id);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },
    updateActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        console.log(req.body.screentime);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },
    removeActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        movie.removeActor(actor);
        res.redirect("back");
    },
}