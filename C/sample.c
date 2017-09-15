/* hello.c -- The most famous program of them all ..
 */

#include <stdio.h>

typedef struct list {
    int item;
    struct list *next;

} list;


int main(void) {
  printf("Hello World!\n");

  list a, b;
  a.item = 5;
  a.next = &b;
  b.item = 6;
  b.next = NULL;

  list *c;
  c = &a;

  while (c)
  {
    printf("%d", c->item);
    c = c->next;

  }

  // return 0; 
}