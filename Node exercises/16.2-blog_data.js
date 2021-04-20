const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log(error);
  }

  const db = client.db("blog_ex_16");
  const usersCollection = db.collection("usersCollection");
  const postsCollection = db.collection("postsCollection");
  const commentsCollection = db.collection("commentsCollection");

  let postId;
  let userId;
  usersCollection.findOne({name: 'ariel'}).then(resUser => {
    console.log(resUser._id );
    userId = resUser._id; 
    postsCollection.findOne({ content: "vlsvlmslfvm" }).then(resPost => {
      postsCollection.updateOne({_id: resPost._id}, {$set:{creator: ObjectID(`${resUser._id}`)}});
      postId = resPost._id;
    }).then(res => {
      commentsCollection.updateOne(
        { content: "skdfljsdlkfjsjf" },
        { $set: { writer: userId, post: postId } }
      );
    })
  }).then(res => console.log(res + '----'))
  .catch (e => console.log(e))

  //1.
  //   usersCollection
  //     .insertMany([
  //       {
  //         name: "ariel",
  //         age: 23,
  //       },
  //       {
  //         name: "iftach",
  //         age: 32,
  //       },
  //     ])
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));

  //2.
    // postsCollection
    //   .insertMany([
    //     {
    //       content: "vlsvlmslfvm",
    //       date: new Date(),
    //       creator: ''
    //     },
    //     {
    //       content: "skdl sadklf kjfk a",
    //       date: new Date(),
    //       creator: ''
    //     },
    //   ])
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));

  //3.
//   commentsCollection.insert([
//     {
//       content: "skdfljsdlkfjsjf",
//       writer: {},
//       post: {},
//     }
//   ]).then((res) => console.log(res))
//   .catch((e) => console.log(e));
  
})
