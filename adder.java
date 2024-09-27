import java.util.Scanner;

public class adder {
    public static void main(String[] arr) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        while (true) {
            System.out.println("Enter The Number oR -999 to Exit:");
            int n = sc.nextInt();
            if (n == -999) {
                break;
            } else {
                sum += n;
            }
        }
        System.out.println("The Sum Is :" + sum);
    }
}
