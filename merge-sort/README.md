<pre>
  __  __                       ____             _   
 |  \/  | ___ _ __ __ _  ___  / ___|  ___  _ __| |_ 
 | |\/| |/ _ \ '__/ _` |/ _ \ \___ \ / _ \| '__| __|
 | |  | |  __/ | | (_| |  __/  ___) | (_) | |  | |_ 
 |_|  |_|\___|_|  \__, |\___| |____/ \___/|_|   \__|
                  |___/                             
</pre>
# How it works
Merge sort recursively divides the input array up into single element
arrays. It then merges all of the single element arrays into sorted two
element arrays, merges the sorted two element arrays into sorted four
element arrays, and so on until everything is merged back into one big
sorted array. (Of course if the input array is of odd length there will
be some odd length arrays, like a one element array merged with a sorted
two element array). The merging of the sorted arrays is similar to
having two stacks of face-up sorted cards. We simply compare the two top
cards, pull off the smallest one and set it off to the side, face down.
The deck that had a card removed now has a new card on top, so we
compare that card with the other deck, remove the smallest one and place
it face down on top of the sorted face down pile, and continue. When we
exhaust one of the piles, we take the remaining (sorted) face up deck
and put it face down on the sorted face down pile.

# Time Complexity
* Best: O(n log n)
* Average: O(n log n)
* Worst: O(n log n)

# Additional Space Complexity
* O(n) during merging
