import java.util.*;

public class Operator {
    public static void main(String args[]){
        int a=10,b=3;

        //Arithmetic opertor
        int add=a+b;
        System.out.println("Addition :"+add);
        
        int sub=a-b;
        System.out.println("Subtraction: "+sub);
        
        int mul=a*b;
        System.out.println("Multiplication: "+mul);

        int div=a/b;
        System.out.println("Division: "+div);

        int mod=a%b;
        System.out.println("Modulus: "+mod);

        //Logical operator
        boolean c1 = true;
        boolean c2 = false;
        if (c1 && c2) {
            System.out.println("Both conditions are true (AND).");
        }else {
            System.out.println("At least one condition is false (AND)."); 
        }

        if (c1 || c2) {
            System.out.println("At least one condition is true (OR).");
        }else {
            System.out.println("Both conditions are false (OR).");
        }

        if (!c1) {
            System.out.println("Condition1 is false (NOT).");
        } else {
            System.out.println("Condition1 is true (NOT)."); 
        }

        //relational operator
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));
    }    
}
