import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page({ post }: { post: StartupTypeCard }) {
    const {_createAt,view,author:{_id:authorId,name},title,category,_id,image,description}=post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className=" size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div> 
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?.authorId}`}>
            <p className="text-16-medium line-clmap-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1"></h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
        <Image src="https://placehold.co/48x48" alt="placehgolder" width={48} height={48} className="rounded-full"></Image>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
            <p className="startup-card_desc">
                {description}
            </p>

            <img src={image} alt="placeholder" className="startup-card_img"/>

      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
        <p className="text-16-medium">{category}</p></Link>
        <Button className="startup-card" asChild><Link href={`/startup/${_id}`}>详情</Link></Button>
      </div>
    </li>
  );
}
