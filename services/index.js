// import CarModel from "../models/Person.js"
import CarModel from "../models/Car.js"

export async function createNewPerson(person) {
  const created = await CarModel.create(person)
  return created.toJSON()
}

export async function getAllPeople() {
  return await CarModel.find().lean()
}

export async function getOnePersonById(id) {
  return await CarModel.findById(id).lean()
}

export async function getFilteredPersonList(property, value) {
  return await CarModel.findOne({ [property]: value }).lean()
}

export async function updateOnePerson(id, updates) {
  return await CarModel.findByIdAndUpdate(id, updates, { new: true }).lean()
}

export async function deleteOnePerson(id) {
  return await CarModel.deleteOne({ _id: id }).lean()
}
