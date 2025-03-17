import java.util.*;

public class LinearSearch {
    public static void linearSearchFun(int len, int searchVal, int array[]){
        int flag=0,index=0;
        for(int i=0;i<len;i++){
            if(searchVal==array[i]){
                flag=1;
                index=i;
            }
        }
        if(flag==1){
            System.out.println(searchVal+" is present in the array at index "+index);
        }else{
            System.out.println(searchVal+" is not  present in the array ");
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the size of array: ");
        int n=sc.nextInt();
        int[] arr=new int[n];
        System.out.print("Enter elements of array: ");
        for(int i=0;i<n;i++){
           arr[i]=sc.nextInt(); 
        }
        System.out.print("Enter the value you want to search: ");
        int searchVal=sc.nextInt();
        linearSearchFun(n,searchVal,arr);
    }    
}
