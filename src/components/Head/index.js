import db from '../../../db.json'

export default function Head(){
    return(
        <head>
            <title>Quiz Vingadores</title>,
            <meta key='og:image' name='og:image' content={db.bg} />
        </head>
    )
}