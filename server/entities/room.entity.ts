import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "./comment.entity";

export class Room {
  @ApiProperty({
    example: 'Phòng 103',
    description: "Room name"
  })
  name: string;

  @ApiProperty({
    example: 'Đây là phòng 103. Em chế chứ em không biết :(',
    description: "Room description"
  })
  description: string;

  @ApiProperty({
    example: '/images/room/103A3.png',
    description: "Room avatar"
  })
  avatar: string;

  @ApiProperty({
    example: '[]',
    description: "Comments about this room"
  })
  comments: [Comment];
}