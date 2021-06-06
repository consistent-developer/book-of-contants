exports.handler = async (event, context) => {
  const chapters = [
    {
      "title": "Chapter_1",
      "body": "Installation",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Analytics.png",
      "path": "Chapter/Chapter_1",
      "readTime": "10 minutes",
      "id": 1
    },
    {
      "title": "Chapter 2",
      "body": "Hello world",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Analytics.png",
      "path": "Chapter/Chapter_2",
      "readTime": "10 minutes",
      "id": 2
    },
    {
      "title": "Chapter 3",
      "body": "Data Fetching",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Data.png",
      "path": "Chapter/Chapter_3",
      "readTime": "10 minutes",
      "id": 3
    },
    {
      "title": "Chapter 4",
      "body": "Routing",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Search.png",
      "path": "Chapter/Chapter_4",
      "readTime": "10 minutes",
      "id": 4
    },
    {
      "title": "Chapter 5",
      "body": "Css Support",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Messages.png",
      "path": "Chapter/Chapter_5",
      "readTime": "10 minutes",
      "id": 5
    },
    {
      "title": "Chapter 6",
      "body": "Deployment",
      "type": "Next Js",
      "images": "https://i.ibb.co/Qk6mRcm/Build.png",
      "path": "Chapter/Chapter_6",
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
    body: JSON.stringify({ mssg: 'ah ah ah, you must be logged into see this' })
  }
}