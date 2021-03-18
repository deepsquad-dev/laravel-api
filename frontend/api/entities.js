export default axios => ({
    async index( params ) {
        return await $axios.$get('/api/v1/entities', {
            params: params
        });
    },
});