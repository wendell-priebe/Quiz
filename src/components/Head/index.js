import db from '../../../db.json';

export default function Head() {
  return (
    <head>
      <title>Quiz Vingadores</title>
      ,
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      ,
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      ,
      <meta key="og:image" name="og:image" content={db.bg} />
    </head>
  );
}
