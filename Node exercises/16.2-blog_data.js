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

  // let postId; // solution for when i didn't control the id
  // let userId;
  // usersCollection.findOne({name: 'ariel'}).then(resUser => {
  //   console.log(resUser._id );
  //   userId = resUser._id;
  //   postsCollection
  //     .findOne({ content: "vlsvlmslfvm" })
  //     .then((resPost) => {
  //       postsCollection.updateOne(
  //         { _id: resPost._id },
  //         { $set: { creator: ObjectID(`${resUser._id}`) } }
  //       );
  //       postId = resPost._id;
  //     })
  //     .catch((e) => console.log(e))
  //     .then((res) => {
  //       commentsCollection.updateOne(
  //         { content: "skdfljsdlkfjsjf" },
  //         { $set: { writer: userId, post: postId } }
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }).then(res => console.log(res + '----'))
  // .catch (e => console.log(e))

  // solution with controled the id
  // 1.
  let user1Id = new ObjectID();
  let user2Id = new ObjectID();
  usersCollection
    .insertMany([
      {
        name: "ariel",
        age: 23,
        _id: user1Id,
      },
      {
        name: "iftach",
        age: 32,
        _id: user2Id,
      },
    ])
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  // 2.
  let post1Id = new ObjectID();
  let post2Id = new ObjectID();
  postsCollection
    .insertMany([
      {
        content: "vlsvlmslfvm",
        date: new Date(),
        creator: user1Id,
        _id: post1Id,
      },
      {
        content: "skdl sadklf kjfk a",
        date: new Date(),
        creator: user2Id,
        _id: post2Id,
      },
    ])
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  // 3.
  commentsCollection
    .insert([
      {
        content: "skdfljsdlkfjsjf",
        writer: user1Id,
        post: post2Id,
      },
    ])
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
})
