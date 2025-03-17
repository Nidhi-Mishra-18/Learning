import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number: ");
        int num=sc.nextInt();
        int flag=0;
        if (num==1) {
            flag=1;
        }else{
            for(int i=2;i<num;i++){
                if(num%i==0){
                    flag=1;
                }
            }
        }
        if (flag==0) {
            System.out.println(num+" is a prime number");
        }else{
            System.out.println(num+" is not a prime number");
        }
    }
}
