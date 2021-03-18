import EntitiesAPI from '@/api/entities.js'

export default function({axios}, inject) {
    const appi = {
        entities: EntitiesAPI( $axios )
    }
    inject('api', api);
}