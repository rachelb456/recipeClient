import { ingredients } from './ingredients';

export class recipes {

    constructor(
        public name?: string,
        public des?: string,
        public pic?: string,
        public level?: string,
        public time?: number,
        public numOfManot?: number,
        public instructions?: string,
        public nameUser?: string,
       // public ingredients?: Array<{ name: string, amount:string }>
        public ingredients: Array<ingredients> = new Array<ingredients>()
    ) {


    }
}