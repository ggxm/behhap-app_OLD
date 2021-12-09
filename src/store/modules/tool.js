export default {
	state: {
		// Define states
		toolList: undefined,
		singleTool: undefined,
	},

	getters: {
		// Define getters
		getToolList: (state) => state.toolList,
		getSingleTool: (state) => state.singleTool,
	},

	mutations: {
		// Define mutations
		TOOLLIST(state, payload) { state.toolList = payload.data },
		SINGLETOOL(state, payload) { state.singleTool = payload.data },
	},

	actions: {
		// [CRUD] GET Method to get tool list
		fetchToolList(context) {
			fetch(`${process.env.VUE_APP_API_URL}/v1/tool`, { method: `GET` }) //=> Fetch API
				.then(response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
				.then(async (apiResponse) => await context.commit(`TOOLLIST`, { data: apiResponse.data })) //=> Commit changes
				.catch(apiError => console.log(apiError)) //=> Catch error
		},

		//[CRUD] GET Method to get tool data from ID
		fetchSingleTool(context, id) {
			fetch(`${process.env.VUE_APP_API_URL}/v1/tool/${id}`, { method: `GET` }) //=> Fetch API
				.then(response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
				.then(async (apiResponse) => await context.commit(`SINGLETOOL`, { data: apiResponse.data })) //=> Commit changes
				.catch(apiError => console.log(apiError)) //=> Catch error
		}
	}
}