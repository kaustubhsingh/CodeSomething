import sys
import string
import re


def word_count():

    file = open("input.txt", "r")
    file_write = open("output.txt", "w")

    word_counts = {}

    for line in file:

        line = re.sub('[()]', '', line)
        data = line.strip().split(" ")

        for word in data:
            if word in word_counts:
                word_counts[word] = word_counts[word] + 1
            else:
                word_counts[word] = 1


    print >> file_write, word_counts

word_count()
