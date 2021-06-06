exports.handler = async () => {
  console.log('function ran')

  const data = { name: 'mario', age: '30', job: 'plumber' }

  //return responce browser
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}