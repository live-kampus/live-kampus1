export class UserProfile{
    userId:string;
    email:string;
    userName:string ;
    profile: string;
    postProfile:string;
    timelinePost:string;
   caption:string;
   tag:string;
    timeline:string;
    friends:Friends[];
    city:string;
    state:string;
    published:Date;
}

// export class posts{
//     timelinePost:string;
//     caption:string;
//     tag:string;
// }

export class Friends{
    name:string;
    dp:string;
}

