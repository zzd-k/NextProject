import {defineField, defineType} from "sanity";


export const startup=defineType({
    name:"startup",
    title:"Startup",
    type:"document",

    fields:[
        defineField({
            name:"title",
            type:"string",
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{//自动生成标题
                source:"title",

            }
        }),
        defineField({
            name:"author",
            type:"reference",
            to:{type:"author"}
        }),
        defineField({
            name:"views",
            type:"number",
        }),
        defineField({
            name:"description",
            type:"text",
        }),
        defineField({
            name:"category",
            type:"string",
            validation:(Rule)=>Rule.min(1)
                .max(20).required().error("请输入分类"),
        }),
        defineField({
            name:"image",
            type:"url",
            validation:(Rule)=>Rule.required()
        }),
        defineField({
            name:"pitch",
            type:"markdown",
        }),
    ],

})