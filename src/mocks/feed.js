export const feedsMock = [
  {
    userId: "u123",
    userName: "John Doe",
    userImage:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
    designation: "Software Engineer",
    content: "Excited to share that I have started a new position at XYZ Corp!",
    likeCount: 34,
    comments: [
      {
        commentId: "c1",
        userId: "u456",
        userName: "Jane Smith",
        content: "Congratulations John!",
        timestamp: "2024-06-20T12:34:56Z",
      },
      {
        commentId: "c2",
        userId: "u789",
        userName: "Mike Johnson",
        content: "Well deserved!",
        timestamp: "2024-06-20T13:22:10Z",
      },
    ],
    postId: "p101",
    isLiked: true,
  },
  {
    userId: "u124",
    userName: "Alice Brown",
    userImage:
      "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
    designation: "Product Manager",
    content: "Join us for the upcoming webinar on product management trends!",
    likeCount: 78,
    comments: [
      {
        commentId: "c3",
        userId: "u321",
        userName: "Robert Wilson",
        content: "Looking forward to it!",
        timestamp: "2024-06-19T10:45:00Z",
      },
      {
        commentId: "c4",
        userId: "u654",
        userName: "Emily Davis",
        content: "Thanks for the heads up!",
        timestamp: "2024-06-19T11:00:00Z",
      },
    ],
    postId: "p102",
    isLiked: false,
  },
  {
    userId: "u125",
    userName: "Charlie Green",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuuLum4ejlpJRyPVCn9V5nsjtNLyU_Of3rg&s",
    designation: "Data Scientist",
    content: "Check out my latest blog post on machine learning algorithms.",
    likeCount: 56,
    comments: [
      {
        commentId: "c5",
        userId: "u987",
        userName: "Samantha Lee",
        content: "Great read, Charlie!",
        timestamp: "2024-06-18T08:23:45Z",
      },
      {
        commentId: "c6",
        userId: "u543",
        userName: "Paul Walker",
        content: "Very informative!",
        timestamp: "2024-06-18T09:15:30Z",
      },
    ],
    postId: "p103",
    isLiked: true,
  },
];
