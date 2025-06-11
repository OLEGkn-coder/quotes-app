import java.util.*;
class FIDOtest1 {
 public static void linlist(LinkedList<Integer> list){
  int listsize = list.size();
  if(listsize > 1){
  int position = (2* listsize / 3) - 1;
  System.out.println(list.get(position));
  }else {
   System.out.println("null");
  }
 }

 public static void main(String[] args) {
  LinkedList<Integer> list = new LinkedList<>();
  list.add(4);
  list.add(6);
  list.add(8);
  linlist(list);
 }
}

