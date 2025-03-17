import java.util.*;

class Student{
    public String name;
    public int  rollNum;
    public String mobileNum;
    public double marks;

    Student(String name, int rollNum, double marks ,String mobileNum){
        this.name = name;
        this.rollNum = rollNum;
        this.marks=marks;
        this.mobileNum = mobileNum;
    }

    public void displayStudentInfo(){
        System.out.println("\nName :"+name+"\nMarks :"+marks+"\nRoll Number :"+rollNum+"\nMobile Number: "+mobileNum);
    }
}

class GraduateStudent extends Student{
    public String qualification;

    GraduateStudent(String name, int rollNum, double marks ,String mobileNum, String qualification){
        super(name, rollNum, marks, mobileNum);
        this.qualification=qualification;
    }
    
    public void displayStudentInfo(){
        super.displayStudentInfo();
        System.out.println("Qualification : "+qualification);
    }
}

public class Inheritance {
    public static void main(String[] args) {            
        GraduateStudent st=new GraduateStudent("Harry",1,98.7,"78690654326","Btech");
        st.displayStudentInfo();
    }
}
