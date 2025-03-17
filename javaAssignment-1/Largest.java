import java.util.*;

public class Largest {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter three numbers: ");
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        if (a>b && a>c) {
            System.out.println(a+" is largest number among three numbers.");
        } else if(b>c && b>c) {
            System.out.println(b+" is largest number among three numbers.");
        }else{
            System.out.println(c+" is largest number among three numbers.");
        }

    }
}
