import App from './../../views/react-src/App';

import {
    controller,
    get,
} from './../lib/router';

@controller({
    type: 'ssr-react',
    prefix: '',
    layout: 'home/index',
    frontApp: App,
})
export default class HomeController {

    @get('/')
    public index() {
        return {
            name: 'Evelyne Nzimeyera',
        }
    }

    @get('/about', {
        paramsType: [
            {name: 'name', type: "string"}
        ]
    })
    public about(req: Express.Request) {

        return {
            about: {
                pageTitle: 'About Us',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta, architecto deleniti ipsum possimus vel asperiores at! Suscipit molestiae nihil autem, provident magni sapiente commodi, repudiandae, repellendus culpa neque sequi.'
            }
        }
    }
}