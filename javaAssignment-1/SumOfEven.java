import java.util.*;

public class SumOfEven {
    public static void main(String[] args) {
        int i=2;
        int sum=0;
        while(i<=10){
            sum+=i;
            i+=2;
        }
        System.out.println("The sum of even numbers from 1 to 10 is: "+sum);
    }
}
