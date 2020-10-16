export const allProjects = [
    {
        id: 1,
        project_name: "Project One",
        project_intro: "The first project.",
        project_goal: 110,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:11:10.382748Z",
        owner: 1,
    },

    {
        id: 2,
        project_name: "Project Two",
        project_intro: "The second project.",
        project_goal: 120,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:12:10.382748Z",
        owner: 1,
    },

    {
        id: 3,
        project_name: "Project Three",
        project_intro: "The third project.",
        project_goal: 130,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:13:10.382748Z",
        owner: 1,
    },

    {
        id: 4,
        project_name: "Project Four",
        project_intro: "The fourth project.",
        project_goal: 150,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:14:10.382748Z",
        owner: 2,
    },

    {
        id: 5,
        project_name: "Project Five",
        project_intro: "The fifth project.",
        project_goal: 150,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:15:10.382748Z",
        owner: 2,
    },

    {
        id: 6,
        project_name: "Project Six",
        project_intro: "The sixth project.",
        project_goal: 150,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:16:10.382748Z",
        owner: 1,
    },

    {
        id: 7,
        project_name: "Project Seven",
        project_intro: "The seventh project.",
        project_goal: 150,
        project_image: "https://via.placeholder.com./300.jpg",
        is_open: false,
        date_created: "2020-10-16T07:17:10.382748Z",
        owner: 2,
    },
];

export const oneProject = {
    id: 1,
    project_name: "Project One",
    project_intro: "The first project.",
    project_goal: 150,
    project_image: "https://via.placeholder.com./300.jpg",
    is_open: false,
    date_created: "2020-10-16T07:10:10.382748Z",
    owner: 1,
    pledges: [
        {
            id: 1,
            pledge_quantity: 100,
            pledge_description: "A comment for the pledge",
            anonymous: false,
            pledge_supporter: 3,
            project_id: 1,
        },
    ],
};