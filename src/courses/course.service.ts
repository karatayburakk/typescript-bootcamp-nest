import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<Course[]> {
    return this.prismaService.course.findMany({});
  }
}
