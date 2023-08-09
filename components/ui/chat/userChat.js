import React from "react";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "../card";

function UserChatCard({ text = "" }){
    return(
        <div className="mb-[25px] mr-[25px] mt-[20px] flex items-end justify-end">
            <Card type={'user'} className='w-[350px]' style={{ marginTop: '10px', border: '1px solid hsl(214.3 31.8% 91.4%)' }}>
                <CardHeader >
                    <CardTitle style={{ margin: 2 }}>You</CardTitle>
                    <CardDescription style={{ margin: 2}}>{text}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}

export { UserChatCard };