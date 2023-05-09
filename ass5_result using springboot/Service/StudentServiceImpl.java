package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudent(String grno) {
        System.out.print("Riteshlndlcwncdsc ldsjoewejlcmksncksn"+grno);
        Iterable<Student> list = studentRepository.findAll(); //
        for(Student student : list){
            System.out.println(student.getGrno());
            if(student.getGrno().equals(grno))
            {
                return student;
            }
        }
        Student s = new Student();
        s.setGrno(null);
        return s ;
    }
}
