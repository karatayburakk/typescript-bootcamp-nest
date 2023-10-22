import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from '@prisma/client';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAll(): Promise<Course[]> {
    return this.courseService.getAll();
  }
}
