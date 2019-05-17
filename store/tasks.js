export const state = () => ({ list: [], counter: 0 })

export const mutations = {
    add(state, task) {
        debugger
        state.list.push({
            id: ++state.counter,
            text: task,
        })
    },
    remove(state, task) {
        state.list.splice(state.list.indexOf(task), 1)
    },

}