{{{
    "title"    : "learn_to_program",
    "tags"     : [ "learn", "programming", "languages" ],
    "category" : "applied",
    "date"     : "5-21-2015",
    "headline" : "Which programming language should I learn first?",
    "image"    : "imgs/post/programmingmagic.png"
}}}

This is the first part of a two-part post.
<br />
<br />
<br />
People often tell me that they want to learn how to program computers. Then they ask me which programming language they should learn first. Usually I mumble something about tradeoffs and preferences and point them towards Python, but the truth is, I don’t know which programming language people should learn first.<sup><a href="#sup1" class="dark-link">1</a></sup> Every language has advantages and disadvantages. Depending on a person’s reasons for wanting to learn how to program, I might recommend C, Java, Python, or JavaScript. What's more, somebody else might recommend that they learn C++, C#, Ruby, or PHP. This, of course, begs a few questions. First, what actually makes each of these languages different, and second, why is one’s first language important? Furthermore, why is there no consensus about which language people should learn first? I will spend the next part of this post explaining the major differences between C, Java, and Python. I have chosen look at these languages because they are among the most commonly used languages<sup><a href="#sup2" class="dark-link">2</a></sup>, and because they differ from each other in important ways.

###C, Java, or Python?

There are three salient characteristics of programming languages that I think new programmers should know about. The first relates to the way in which programs written in a given language run. For some languages, programs have to be “compiled” to machine code before they run. When they do run, the computer just executes the precompiled machine code. Languages that work this way are called *compiled languages*. Some languages don’t work this way. They differ in that their programs are never compiled to machine code. Rather, when their programs run, they are “interpreted” by a specialized program called an interpreter. Languages that work this way are called *interpreted languages*. C is a compiled language. Python is an interpreted language. Java — wait for it — is both compiled and interpreted.<sup><a href="#sup3" class="dark-link">3</a></sup>

Although the differences between compiled and interpreted languages might seem largely irrelevant to programmers, they actually do affect the programming environment. For example, programmers who use interpreted languages have to deal with run-time errors fairly often. Programmers who use compiled languages will usually see compile-time errors instead. When choosing a programming language, this difference is important to keep in mind. Personally, and I think most programmers would back me up on this, I prefer languages that favor compile-time errors. Their programs are easier to debug, and they are usually less likely to crash at run-time. In this area, C and Java beat Python.

The second characteristic of programming languages that I think new programmers should know about relates to programming style. There are many more programming styles than I am able to fit here, so I will only discuss the three that I use most often: imperative programming, object-oriented programming, and functional programming. Imperative programming languages, as their name suggests, are littered with imperatives: “display this,” “wait for this,” “move this here.” Object-oriented languages usually use imperative code, but they group large chunks of code into things called “objects,” which work exactly like real world objects. For example, a object-oriented word processor program might group every piece of code that manipulates the document into a single object called “document”. The “document” object might group portions of its code into even more objects: one object called “keyboard” could contain the code that handles key presses, one called “font” could contain the code that stores and displays fonts, one called “image” could contain the code that stores and displays images, and so on.

Functional languages differ starkly from imperative and object-oriented languages. They force programmers to take a fundamentally different approach to problem-solving. If an imperative programmer wanted to add the number 42 to every number in a list of numbers, he or she would have to write something like “take each number in my list, and set that number equal to itself plus 42.” A functional programmer would have to write something like “every element in my list now equals itself plus 42.”

Each programming style has its benefits. Imperative code is simple and mirrors how people give instructions in real life. Object-oriented code encapsulates complex blocks of code and allows large projects to be broken into manageable modules. Functional code lets programmers manipulate data extraordinarily quickly and makes it easier to implement complex mathematical formulas.

As with compiled and interpreted languages, the lines between imperative, object-oriented, and functional languages are fuzzy. Typically, people classify C as an imperative language, Java as an object-oriented language, and Python as a combination imperative, object-oriented, and functional language.<sup><a href="#sup4" class="dark-link">4</a></sup>

I usually recommend that people learn Python first in part because it allows programmers to use a wide variety of styles. A modern-day Dickens might note that it is the most imperative of languages, it is the least imperative of languages. It is the most object-oriented of languages, it is the least object-oriented of languages. It is the most functional of languages, it is the least functional of languages. Of course, I’m not recommending that new programmers use Python so that they can inappropriately mix programming styles or write sloppy code. Rather, I’m recommending that they use Python so that they can learn many different programming styles within the framework of a single language.

There is one final characteristic of programming languages that I think new programmers should know about. All programming languages have different syntaxes. Some languages have intuitive, simple syntax, others have difficult, complex syntax. Python has perhaps the most intuitive, simplest syntax of any mainstream programming language. In this area, Java and C are clear losers. Here are three programs that each read in a text file and display it to a user. The first is written in Python, the second in Java, and the third in C:

######Python
    fileObject = open("information.txt")
    for line in fileObject:
        print line

######Java
    import java.io.File;
    import java.io.FileNotFoundException;
    import java.util.Scanner;
    
    public class Main {
        public static void main(String args[]) throws FileNotFoundException {
            File fileObject = new File("information.txt");
            Scanner scannerObject = new Scanner(fileObject);
            while(scannerObject.hasNext()) {
                String line = scannerObject.nextLine();
                System.out.println(line);
            }
        }
    }

######C
    #include <stdio.h>
    
    int main() {
        FILE* filePointer = fopen("information.txt", "r");
        char* line = new char[80];
        while(fscanf(filePointer, "%s", line) != EOF) {
            printf("%s\n", line);
        }
    }

###Why is one’s first language important?

Much like one’s first love, one’s first language becomes the framework within which one understands all subsequent languages. In other words, it’s pretty important. People who learn C first have to learn many new programming techniques when they learn Java. They do so within the framework provided by their C knowledge. Similarly, people who learn Java first have to learn many new programming techniques when they learn C. They do so within the framework provided by their Java knowledge. I myself learned C first, and tend to solve problems imperatively. When I learned Java, I had to retrain my brain to solve problems using object-oriented design patterns instead. Now, even though I can switch between the two styles quite easily, my thinking still shows vestiges of my early relationship with C.

Like most analogies, my analogy between love and programming languages falls short in one important way. If one’s first love is hard and frustrating, well, one simply moves on to other loves. If one’s first programming language is hard and frustrating, it is a sad consequence of evolution that one does not usually move on to other programming languages. For this reason, I usually recommend that people learn Python before they learn Java or C. In addition to being better for beginners in the ways I have noted above, it is easier and often more enjoyable to learn.

###Why do people disagree so much?
People usually disagree about which language is best for beginners because all beginners are different. And all languages are different. Languages like Python and Ruby are really great for beginners, but they typically run a bit more slowly than other languages and aren't well-suited for some purposes. Languages like C and C++ are great because they run quickly and force new programmers to learn a few details about computers, but they’re also very difficult to learn and, like Python and Ruby, they aren’t well-suited for some purposes. Languages like Java and C# are great because they’re ubiquitous and force programmers to learn object-oriented design, but they’re fairly difficult to learn and also aren't well-suited for some purposes. So when people vacillate between recommending Python or Ruby or Java or C# or C++ or C, or when two people give contrasting recommendations, what they’re really saying is, “We don’t know which language people should learn first.”

For most people, I recommend learning Python first. I think the majority of the programming community backs me up on this. If you are inclined to learn how to program, it might help to look at <a href="#sup4" class="dark-link">footnote #5</a> for links to more information on the topic.
<br />
<br />
Part two of this post will explore other aspects of learning how to program. It will look specifically at strategies and attitudes that have helped me learn how to program.
<br />
<br />
***
<sup id="sup1">1</sup>For a fantastic flow chart that does, see http://carlcheo.com/startcoding  
<sup id="sup2">2</sup>http://blog.codeeval.com/codeevalblog/2015#.VV47MFrwOkg=  
<sup id="sup3">3</sup>For a good explanation of how this works, see http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language  
<sup id="sup4">4</sup>Of course, Java is also imperative, but using it imperatively would be butchering the language. In addition, although Java 8 introduced functional programming features to the language, they don’t pervade Java code enough for me to consider Java a functional language.  
<sup id="sup5">5</sup>I put this link in a superscript earlier, but I thought it was good enough to warrant a second mention http://carlcheo.com/startcoding. This page on reddit has some great information for new programmers http://www.reddit.com/r/learnprogramming/wiki/faq