import http from "../http-common"

const getAll = () => {
	return http.get("/vehicles")
}

const get = id => {
	return http.get(`/vehicle/${id}`)
}

const create = data => {
	return http.post("/vehicle/upsert", data)
}

const update = (id, data) => {
	return http.put(`/vehicle/upsert`, data)
}

const remove = id => {
	return http.delete(`/vehicle/${id}`)
}

const TutorialService = {
	getAll,
	get,
	create,
	update,
	remove
}

export default TutorialService
