const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

// const databaseConnection = () => {
//   mongoose.set('strictQuery', true)
//   mongoose
//     .connect(
//       `mongodb+srv://khaled:VNHAybzMnVDF6NMq@cluster0.ka5da.mongodb.net/redux-assign-1?retryWrites=true&w=majority`,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//     )
//     .then((data) => {
//       console.log(
//         `MongoDb Database Connected to the Server : ${data.connection.host}`,
//       )
//     })
//     .catch((err) => {
//       console.log(`Some Database Connection Error Occured :- ${err}`)
//     })
// }
// module.exports = databaseConnection

// mongoose.connect(
//   `mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   },
// )

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', function () {
//   console.log('Connected successfully')
// })

const connectDB = async () => {
  mongoose.set('strictQuery', false)
  mongoose
    .connect(
      `mongodb+srv://khaled:VNHAybzMnVDF6NMq@cluster0.ka5da.mongodb.net/redux-assign-1?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      },
    )
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error('Not Connected', err))
}

module.exports = connectDB
