from .models import Profile, Profile_advertiser,Add_Reklama

def user_authenticated(request):
    user_authenticated_data = {'user_authenticated': request.user.is_authenticated}

    if request.user.is_authenticated:
        # Assuming that both 'Profile' and 'Profile_advertiser' models are related to the 'User' model
        try:
            user_profile = Profile.objects.get(username=request.user)
            user_authenticated_data['user_photo'] = user_profile.photo
            user_authenticated_data['url']='logging'
            user_authenticated_data['url_cabinet']='cabinet_telegram'
            user_authenticated_data['pk'] = user_profile.pk
            user_authenticated_data['balance']=user_profile.balance
            user_authenticated_data['pages']=user_profile
            user_authenticated_data['bell'] = user_profile
            user_authenticated_data['number_count']=Add_Reklama.objects.filter(chanel__username=request.user).count()
        except Profile.DoesNotExist:
            try:
                advertiser_profile = Profile_advertiser.objects.get(username=request.user)
                user_authenticated_data['user_photo'] = advertiser_profile.photo
                user_authenticated_data['url'] = 'login_reklama'
                user_authenticated_data['url_cabinet'] = 'cabinet_reklama'
                user_authenticated_data['pk'] = advertiser_profile.pk
                user_authenticated_data['balance'] = advertiser_profile.balance
                user_authenticated_data['cart'] = advertiser_profile.balance
                user_authenticated_data['number_count']=Add_Reklama.objects.filter(user_order=advertiser_profile).count()

            except Profile_advertiser.DoesNotExist:
                pass

    return user_authenticated_data