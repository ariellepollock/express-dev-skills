module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

const skills = [
    {id: 1, skill: 'Photoshop', learn: true},
    {id: 2, skill: 'Illustrator', learn: true},
    {id: 3, skill: 'XD', learn: true},
    {id: 4, skill: 'Lightroom', learn: true},
    {id: 5, skill: 'Rhino', learn: true},
    {id: 6, skill: 'Premier Pro', learn: true},
    {id: 7, skill: 'InDesign', learn: true},
    {id: 8, skill: 'Midjourney', learn: true},
    {id: 9, skill: 'InCopy', learn: true}
]

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.learn = false
    skills.push(skill)
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills
}