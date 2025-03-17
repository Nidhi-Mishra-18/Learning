import java.util.*;

public class Factorial{
    public static int factorial(int n) {
        if(n<0) {
            return -1;
        }

        if(n==0) {
            return 1; 
        }

        int factorial=1;
        for (int i=2; i<= n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static void main (String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number whose factorial you want to calculate:");  
        int number=sc.nextInt();
        int res=factorial(number);
        System.out.println("Factorial of "+number+" is "+res);
    }
}