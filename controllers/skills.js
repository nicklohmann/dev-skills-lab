import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req,res) {
  req.body.hasSkill = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show' , {
      skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
	index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete

}