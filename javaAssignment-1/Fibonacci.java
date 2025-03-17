import java.util.Scanner;

public class Fibonacci {
    public static void fibonacciSeries(int n){
        int a=0,b=1;
        if(n==1){
            System.out.println(a);
        }
        else if(n==2){
            System.out.println(a+" "+b);
        }
        else{
            System.out.print(a+" "+b);
            for(int i=3;i<=n;i++){
                int c=a+b;
                System.out.print(" "+c);
                a=b;
                b=c;
            }
        }
    }

    public static void main (String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number:");  
        int number=sc.nextInt();
        fibonacciSeries(number);
    }
}
