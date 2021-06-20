exports.handler = async (event, context) => {
  const chapters = [
    {
      "title": "Chapter 1",
      "body": "What is python",
      "type": "Python",
      "images": "https://i.ibb.co/c2Hwpj6/Product-Launch.png",
      "path": "python/Chapter_1",
      "readTime": "10 minutes",
      "id": 1
    },
    {
      "title": "Chapter 2",
      "body": "Python syntax",
      "type": "Python",
      "images": "https://i.ibb.co/7grx5JT/Analytics.png",
      "path": "python/Chapter_2",
      "readTime": "10 minutes",
      "id": 2
    },
    {
      "title": "Chapter 3",
      "body": "Python variable",
      "type": "Python",
      "images": "https://i.ibb.co/S37YpRs/Data.png",
      "path": "python/Chapter_3",
      "readTime": "10 minutes",
      "id": 3
    },
    {
      "title": "Chapter 4",
      "body": "Python Operators",
      "type": "Python",
      "images": "https://i.ibb.co/WVpJ0gq/Search.png",
      "path": "python/Chapter_4",
      "readTime": "10 minutes",
      "id": 4
    },
    {
      "title": "Chapter 5",
      "body": "Python If ... Else",
      "type": "Python",
      "images": "https://i.ibb.co/FxV6mMh/Messages.png",
      "path": "python/Chapter_5",
      "readTime": "10 minutes",
      "id": 5
    },
    {
      "title": "Chapter 6",
      "body": "Python For Loops",
      "type": "Python",
      "images": "https://i.ibb.co/1dVpQ1c/Build.png",
      "path": "python/Chapter_6",
      "readTime": "10 minutes",
      "id": 6
    },
  ]

  if (context.clientContext.user) {
    // fetch data & then return
    return {
      statusCode: 200,
      body: JSON.stringify(chapters)
    }
  }

  // return error status
  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: 'oh, you must be logged into see this' })
  }
}