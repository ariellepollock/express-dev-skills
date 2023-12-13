module.exports = {
    getAll,
    getOne
}

const skills = [
    {id: 1, skill: 'Photoshop'},
    {id: 2, skill: 'Illustrator'},
    {id: 3, skill: 'XD'},
    {id: 4, skill: 'Lightroom'},
    {id: 5, skill: 'Rhino'},
    {id: 6, skill: 'Premier Pro'},
    {id: 7, skill: 'InDesign'},
    {id: 8, skill: 'Midjourney'},
    {id: 9, skill: 'InCopy'}
]

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills
}