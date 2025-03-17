import java.util.*;

class Students{
   private String student_name;
   private int  student_roll;
   public double student_marks;

   Students(String student_name,int student_roll,double student_marks){
      this.student_name = student_name;
      this.student_roll = student_roll;
      this.student_marks = student_marks;
   }
   
   public String getName() {
      return student_name;
   }

   public void setName(String student_name) {
      this.student_name = student_name;
   }

   public int getRollNumber() {
      return student_roll;
   }

   public void setRollNumber(int student_roll) {
      this.student_roll= student_roll;
   }
   public void displayStudentInfo(){
      System.out.println("\nName :"+student_name+"\nMarks :"+student_marks+"\nRoll Number :"+student_roll);
   }
}

public class ClassExample {
   public static void main(String[] args) {
      Students st1=new Students("ABC",123,89.87);
      st1.displayStudentInfo();
      
      Students st2=new Students("XYZ",124,78);
      st2.displayStudentInfo();
   }
}