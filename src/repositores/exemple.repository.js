import connection from "../database/db.js"


async function getExempleRepository(){
  const queryExemple =  await connection.query(
    `
    SELECT * FROM exemple;
    `
  )
  return queryExemple
}

export {
  getExempleRepository
}