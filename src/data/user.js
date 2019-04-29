export default {
  searchUsers: [
    {
      id: "user01",
      username: "manager",
      avatar: "https://ifh.cc/g/YKvkn.png",
      isFollowing: true,
      isSelf: false
    },
    {
      id: "user02",
      username: "user02",
      avatar: "https://ifh.cc/g/oyWI2.png",
      isFollowing: false,
      isSelf: false
    },
    {
      id: "user03",
      username: "user03",
      avatar: "https://ifh.cc/g/TXvwB.png",
      isFollowing: false,
      isSelf: false
    },
    {
      id: "user04",
      username: "user04",
      avatar: "https://ifh.cc/g/4hBOs.png",
      isFollowing: false,
      isSelf: false
    },
    {
      id: "user05",
      username: "user05",
      avatar: "https://ifh.cc/g/c9y6K.png",
      isFollowing: false,
      isSelf: false
    },
    {
      id: "user06",
      username: "user06",
      avatar: "https://ifh.cc/g/4t5IN.png",
      isFollowing: false,
      isSelf: false
    },
    {
      id: "user07",
      username: "user07",
      avatar: "https://ifh.cc/g/kwnGH.png",
      isFollowing: false,
      isSelf: true
    }
  ],
  searchPosts: [
    {
      id: "post01",
      user: {
        id: "user01",
        avatar: "https://ifh.cc/g/YKvkn.png",
        username: "manager"
      },
      files: [
        {
          id: "file01",
          url: "https://ifh.cc/g/4t5IN.png"
        },
        {
          id: "file02",
          url: "https://ifh.cc/g/cZSJ6.jpg"
        },
        {
          id: "file03",
          url: "https://ifh.cc/g/O8nu3.jpg"
        }
      ],
      likeCount: 1,
      isLiked: true,
      comments: [
        {
          id: "comment01",
          text: "댓글 테스트",
          user: {
            id: "user02",
            username: "user02"
          }
        }
      ],
      createdAt: "2019-04-28 16:20:30",
      location: "seoul",
      caption: "love"
    },
    {
      id: "test",
      user: {
        id: "user01",
        avatar: "https://ifh.cc/g/YKvkn.png",
        username: "manager"
      },
      files: [
        {
          id: "file01",
          url: "https://ifh.cc/g/cZSJ6.jpg"
        },
        {
          id: "file02",
          url: "https://ifh.cc/g/zIAsh.jpg"
        },
        {
          id: "file03",
          url: "https://ifh.cc/g/O8nu3.jpg"
        }
      ],
      likeCount: 1,
      isLiked: true,
      comments: [
        {
          id: "comment01",
          text: "댓글 테스트",
          user: {
            id: "user02",
            username: "user02"
          }
        }
      ],
      createdAt: "2019-04-28 16:20:30",
      location: "seoul",
      caption: "love"
    },
    {
      id: "post03",
      user: {
        id: "user01",
        avatar: "https://ifh.cc/g/YKvkn.png",
        username: "manager"
      },
      files: [
        {
          id: "file01",
          url: "https://ifh.cc/g/c9y6K.png"
        },
        {
          id: "file02",
          url: "https://ifh.cc/g/cZSJ6.jpg"
        },
        {
          id: "file03",
          url: "https://ifh.cc/g/O8nu3.jpg"
        }
      ],
      likeCount: 1,
      isLiked: true,
      comments: [
        {
          id: "comment01",
          text: "댓글 테스트",
          user: {
            id: "user02",
            username: "user02"
          }
        }
      ],
      createdAt: "2019-04-28 16:20:30",
      location: "seoul",
      caption: "love"
    },
    {
      id: "post04",
      user: {
        id: "user01",
        avatar: "https://ifh.cc/g/YKvkn.png",
        username: "manager"
      },
      files: [
        {
          id: "file01",
          url: "https://ifh.cc/g/4hBOs.png"
        },
        {
          id: "file02",
          url: "https://ifh.cc/g/cZSJ6.jpg"
        },
        {
          id: "file03",
          url: "https://ifh.cc/g/O8nu3.jpg"
        }
      ],
      likeCount: 1,
      isLiked: true,
      comments: [
        {
          id: "comment01",
          text: "댓글 테스트",
          user: {
            id: "user02",
            username: "user02"
          }
        }
      ],
      createdAt: "2019-04-28 16:20:30",
      location: "seoul",
      caption: "love"
    }
  ]
};
