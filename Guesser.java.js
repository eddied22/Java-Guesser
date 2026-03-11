import java.util.Scanner;

public class Guesser {

    public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    int choice = -1;

    while (choice != 0) {

    System.out.println("0) Exit");
    System.out.println("1) Human Guesser");
    System.out.println("2) Computer guesser");
    System.out.print("\nPlease enter 0-2: ");

    choice = input.nextInt();

    if (choice == 1) {
    humanGuesser(input);
}
else if (choice == 2) {
    computerGuesser(input);
}
}

input.close();
}

public static void humanGuesser(Scanner input) {

    System.out.println("human guesser");

    int number = (int)(Math.random() * 100) + 1;
    int guess = 0;
    int count = 1;

    while (guess != number) {

        System.out.print(count + ") Please enter a number: ");
        guess = input.nextInt();

        if (guess < number) {
            System.out.println("too low...");
        }
        else if (guess > number) {
            System.out.println("too high...");
        }

        count++;
    }

    System.out.println("got it!");
    System.out.println("Very good!\n");
}

public static void computerGuesser(Scanner input) {

    System.out.println("computer guesser");

    int low = 1;
    int high = 100;
    int guess;
    int count = 1;
    char response = ' ';

    while (response != 'c') {

        guess = (low + high) / 2;

        System.out.println(count + ") I guess " + guess);
        System.out.print("Too (H)igh, too (L)ow, or (C)orrect? ");

        response = input.next().toLowerCase().charAt(0);

        if (response == 'l') {
            low = guess + 1;
        }
        else if (response == 'h') {
            high = guess - 1;
        }

        count++;
    }
}
}