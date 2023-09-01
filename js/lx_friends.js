const people_icon_svg = '<svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 12.8168 3.1088 13.6081 3.31269 14.3603C3.72385 14.0549 4.18033 13.7872 4.67874 13.5718C4.25207 12.9917 3.99999 12.2753 3.99999 11.5C3.99999 9.567 5.56699 8 7.49999 8C9.43298 8 11 9.567 11 11.5C11 12.2753 10.7479 12.9918 10.3212 13.5718C10.7765 13.7685 11.1973 14.009 11.5808 14.2826C11.5933 14.2916 11.6057 14.3008 11.6177 14.3103C12.021 13.878 12.4936 13.4824 13.0284 13.1452C12.0977 12.4128 11.5 11.2762 11.5 10C11.5 7.79086 13.2908 6 15.5 6C17.7091 6 19.5 7.79086 19.5 10C19.5 10.8095 19.2595 11.5629 18.8461 12.1925C19.6192 12.3672 20.3212 12.6528 20.9432 13.0164C20.9807 12.6828 21 12.3436 21 12C21 7.02944 16.9706 3 12 3ZM10.4907 15.9573C10.4664 15.9429 10.4426 15.9274 10.4192 15.9107C9.65816 15.3678 8.67891 15 7.49999 15C6.06158 15 4.91073 15.5491 4.09526 16.3065C5.622 19.1029 8.58946 21 12 21C15.8853 21 19.1956 18.538 20.4559 15.089C20.4386 15.0778 20.4216 15.066 20.4048 15.0536C19.5686 14.4343 18.4544 14 17.0906 14C13.7836 14 12 16.529 12 18C12 18.5523 11.5523 19 11 19C10.4477 19 9.99999 18.5523 9.99999 18C9.99999 17.3385 10.1699 16.6377 10.4907 15.9573ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM15.5 8C14.3954 8 13.5 8.89543 13.5 10C13.5 11.1046 14.3954 12 15.5 12C16.6046 12 17.5 11.1046 17.5 10C17.5 8.89543 16.6046 8 15.5 8ZM5.99999 11.5C5.99999 10.6716 6.67156 10 7.49999 10C8.32841 10 8.99999 10.6716 8.99999 11.5C8.99999 12.3284 8.32841 13 7.49999 13C6.67156 13 5.99999 12.3284 5.99999 11.5Z"/></svg>';

const friends_table = '<div><div class="-mx-4 transition-opacity md:mx-0"><div role="table" style="min-width:0" class="border-spacing-0 overflow-auto"><div class="inline-block min-w-full"><div class="border-divider-border-2 dark:border-dark-divider-border-2 border-b"><div role="row" style="display:flex;flex:1 0 auto;min-width:0"><div colspan="1" role="columnheader" style="box-sizing:border-box;flex:22 0 auto;min-width:0;width:22px" class="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3"><div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis"></div></div></div><div colspan="1" role="columnheader" style="box-sizing:border-box;flex:180 0 auto;min-width:0;width:180px;cursor:pointer" class="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"><div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">User</div><span class="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"></path></svg></span></div></div><div colspan="1" role="columnheader" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px;cursor:pointer" class="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"><div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">Rating</div><span class="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"></path></svg></span></div></div><div colspan="1" role="columnheader" style="box-sizing:border-box;flex:144 0 auto;min-width:0;width:144px;cursor:pointer" class="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"><div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">Problems Solved</div><span class="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" fill="currentColor"><path d="M10.9052 5.47044L7.48504 2.19872C7.47354 2.18772 7.46161 2.1771 7.44926 2.16687C7.16479 1.93123 6.72125 1.94709 6.45859 2.20229L3.09299 5.47222C3.0332 5.53031 3 5.60648 3 5.68555C3 5.85922 3.15694 6.00001 3.35053 6.00001H10.6495C10.7385 6.00001 10.8243 5.96959 10.8893 5.91493C11.0305 5.79613 11.0376 5.59712 10.9052 5.47044Z"></path></svg></span></div></div><div colspan="1" role="columnheader" style="box-sizing:border-box;flex:54 0 auto;min-width:0;width:54px" class="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3"><div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">Top</div></div></div></div></div><div role="rowgroup"><div role="row" style="display:flex;flex:1 0 auto;min-width:0" class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"><div role="cell" style="box-sizing:border-box;flex:22 0 auto;min-width:0;width:22px" class="mx-2 flex items-center py-[11px]"><img src="https://assets.leetcode.com/users/neal_wu/avatar_1574529913.png" class="min-w-[20px] max-w-[20px] rounded-full object-cover" alt="neal_wu"></div><div role="cell" style="box-sizing:border-box;flex:180 0 auto;min-width:0;width:180px" class="mx-2 flex items-center py-[11px]"><div class="max-w-[302px] flex items-center overflow-hidden"><div class="overflow-hidden"><div class="flex items-center"><div class="truncate"><a href="/neal_wu" class="h-5 hover:text-blue-s dark:hover:text-dark-blue-s">neal_wu (Neal Wu)</a></div></div></div></div></div><div role="cell" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px" class="mx-2 flex items-center py-[11px]">3686<span class="text-gray-5">&nbsp;(51)</span></div><div role="cell" style="box-sizing:border-box;flex:144 0 auto;min-width:0;width:144px" class="mx-2 flex items-center py-[11px]"><span>253&nbsp;(</span><span class="text-olive dark:text-dark-olive">60</span>+<span class="text-yellow dark:text-dark-yellow">141</span>+<span class="text-pink dark:text-dark-pink">52</span>)</div><div role="cell" style="box-sizing:border-box;flex:54 0 auto;min-width:0;width:54px" class="mx-2 flex items-center py-[11px]"><span>0.01%</span></div></div><div role="row" style="display:flex;flex:1 0 auto;min-width:0" class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"><div role="cell" style="box-sizing:border-box;flex:22 0 auto;min-width:0;width:22px" class="mx-2 flex items-center py-[11px]"><img src="https://assets.leetcode.com/users/avatars/avatar_1637687985.png" class="min-w-[20px] max-w-[20px] rounded-full object-cover" alt="neal_wu"></div><div role="cell" style="box-sizing:border-box;flex:180 0 auto;min-width:0;width:180px" class="mx-2 flex items-center py-[11px]"><div class="max-w-[302px] flex items-center overflow-hidden"><div class="overflow-hidden"><div class="flex items-center"><div class="truncate"><a href="/rahulsati9969" class="h-5 hover:text-blue-s dark:hover:text-dark-blue-s">rahulsati9969 (Rahul Sati)</a></div></div></div></div></div><div role="cell" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px" class="mx-2 flex items-center py-[11px]">1461<span class="text-gray-5">&nbsp;(9)</span></div><div role="cell" style="box-sizing:border-box;flex:144 0 auto;min-width:0;width:144px" class="mx-2 flex items-center py-[11px]"><span>965&nbsp;(</span><span class="text-olive dark:text-dark-olive">486</span>+<span class="text-yellow dark:text-dark-yellow">458</span>+<span class="text-pink dark:text-dark-pink">21</span>)</div><div role="cell" style="box-sizing:border-box;flex:54 0 auto;min-width:0;width:54px" class="mx-2 flex items-center py-[11px]"><span>56.98%</span></div></div><div role="row" style="display:flex;flex:1 0 auto;min-width:0" class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"><div role="cell" style="box-sizing:border-box;flex:22 0 auto;min-width:0;width:22px" class="mx-2 flex items-center py-[11px]"><img src="https://assets.leetcode.com/users/avatars/avatar_1673397790.png" class="min-w-[20px] max-w-[20px] rounded-full object-cover" alt="neal_wu"></div><div role="cell" style="box-sizing:border-box;flex:180 0 auto;min-width:0;width:180px" class="mx-2 flex items-center py-[11px]"><div class="max-w-[302px] flex items-center overflow-hidden"><div class="overflow-hidden"><div class="flex items-center"><div class="truncate"><a href="/rahulb_001" class="h-5 hover:text-blue-s dark:hover:text-dark-blue-s">rahulb_001 (Rahul Bisht)</a></div></div></div></div></div><div role="cell" style="box-sizing:border-box;flex:84 0 auto;min-width:0;width:84px" class="mx-2 flex items-center py-[11px]">1598<span class="text-gray-5">&nbsp;(31)</span></div><div role="cell" style="box-sizing:border-box;flex:144 0 auto;min-width:0;width:144px" class="mx-2 flex items-center py-[11px]"><span>910&nbsp;(</span><span class="text-olive dark:text-dark-olive">456</span>+<span class="text-yellow dark:text-dark-yellow">432</span>+<span class="text-pink dark:text-dark-pink">22</span>)</div><div role="cell" style="box-sizing:border-box;flex:54 0 auto;min-width:0;width:54px" class="mx-2 flex items-center py-[11px]"><span>22.21%</span></div></div></div></div></div></div></div>';


function addFriendsIconOnNavbar() {
    if (document.querySelector('#friends-icon')) return;

    let navbar_user_avatar = document.querySelector('#navbar_user_avatar');
    if (!document.querySelector('#navbar_user_avatar')) return;

    var a = document.createElement('a');
    a.setAttribute('class', 'group relative flex h-8 p-1 items-center justify-center rounded hover:bg-fill-3 dark:hover:bg-dark-fill-3');
    a.innerHTML = people_icon_svg;
    var svg = a.querySelector('svg');
    svg.id = 'friends-icon'
    svg.setAttribute('class', 'h-[20px] w-[20px] group-hover:text-text-primary dark:group-hover:text-dark-text-primary text-text-secondary dark:text-dark-text-secondary');
    svg.width = '1em';
    svg.height = '1em';
    svg.setAttribute('fill', 'currentColor');
    a.href = 'https://leetcode.com/friends/';

    let profile_icon = navbar_user_avatar.parentElement.parentElement;
    let navmenu = profile_icon.parentElement;
    navmenu.insertBefore(a, profile_icon);
}

function handleFriendsPage() {

    if (location.pathname != "/friends/") return;

    let area = document.querySelector('.mx-auto');
    if(area){
        area.innerHTML = "";
        document.title = "Friends - LeetCode";
        friendsPage(area);
    }
}

function friendsPage(area) {
    // Remove user friends
    area.innerHTML = friends_table;
}

function lx_friends() {

    // Add friends icon on navbar

    const num = window.location.pathname.split('/').filter(segment => segment !== '').length;
    if (num >= 2) {
        addFriendsIconOnNavbar();
        return;
    }

    let nextRoot = document.querySelector('#__next');
    let appRoot = document.querySelector('#app');

    let observer = new MutationObserver(addFriendsIconOnNavbar);

    if (nextRoot) {
        observer.observe(document.querySelector('#__next'), { childList: true, subtree: true });
    } else if(appRoot){
        observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
    }

    handleFriendsPage();

}


window.addEventListener("load", lx_friends);

