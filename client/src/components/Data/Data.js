import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
   
} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",

    },

    { 
        icon: UilClipboardAlt,
        heading: "Orders",

    },
    // {
    //     icon: UilUsersAlt,
    //     heading: "Customers",
    // },

    {
        icon: UilPackage,
        heading: 'Products',

    },

    {
        icon: UilChart,
        heading: 'Analytics',
    }

];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #2F2E2E 0%, #2F2E2E 100%)",
            boxShadow: "0px 0px 20px 1px #ffbb763f",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },

    // {
    //     title: "Revenue",
    //     color: {
    //         backGround: "linear-gradient(180deg, #2F2E2E 0%, #2F2E2E 100%)",
    //         boxShadow: "0px 0px 20px 1px #1e0127",
    //     },
    //     barValue: 80,
    //     value: "14,270",
    //     png: UilMoneyWithdrawal,
    //     series: [
    //         {
    //             name: "Sales",
    //             data: [31,40,28,51,42,109,100],
    //         },
    //     ],
    // },

    // {
    //     title: "Expenses",
    //     color: {
    //         backGround: "linear-gradient(180deg, #2F2E2E 0%, #2F2E2E 100%)",
    //         boxShadow: "0px 0px 20px 1px  #77C23B",
    //     },
    //     barValue: 60,
    //     value: "4,270",
    //     png: UilClipboardAlt,
    //     series: [
    //         {
    //             name: "Sales",
    //             data: [10,25,15,30,12,15,20],
    //         },
    //     ],
    // },
]