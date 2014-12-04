<pre>
  ___                     _   _               ____             _   
 |_ _|_ __  ___  ___ _ __| |_(_) ___  _ __   / ___|  ___  _ __| |_ 
  | || '_ \/ __|/ _ \ '__| __| |/ _ \| '_ \  \___ \ / _ \| '__| __|
  | || | | \__ \  __/ |  | |_| | (_) | | | |  ___) | (_) | |  | |_ 
 |___|_| |_|___/\___|_|   \__|_|\___/|_| |_| |____/ \___/|_|   \__|
</pre>

# How it works
Insertion sort is an incremental sort that works 
similar to sorting a hand of cards as it's dealt. 
We start with one card in our left hand, and as we pick up each new
card with our right hand we find the correct spot in the left hand 
to insert the new card. Our left hand therefore always stays in sorted
order. To find the correct spot for the new card, we start at the biggest
card in our sorted hand and compare the new card with it; if the new card is smaller, we move to the next card in the sorted hand, compare, and continue until our new card is greater than the card it's compared to. At this point we insert it after the smaller card.


# Time Complexity
* Best: O(n)
* Average: O(n^2)
* Worst: O(n^2)

# Additional Space Complexity
* O(1) - in-place algorithm
