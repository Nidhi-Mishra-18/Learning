import java.util.*;

public class AverageOfArray {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9,10};
        int len=arr.length;
        int sum=0;
        for(int i=0;i<len;i++){
            sum+=arr[i];
        }
        double avg=(double)sum/len;
        System.out.println("Average of array elements : "+avg);
    }    
}
